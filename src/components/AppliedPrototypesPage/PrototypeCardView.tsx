import { Card, Popover, Space, Tag } from 'antd';
import isEmpty from 'lodash/isEmpty';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { CatalogEntry, CatalogEntryType } from '../types';
import CommunityImage from '../../images/community.png';
import HuggingFaceImage from '../../images/hugging-face.png';
import AppliedPrototypeModal from './AppliedPrototypeModal';
import PrototypeBadge from './PrototypeBadge';


interface Props {
  catalogEntry: CatalogEntry;
}

const StyledCard = styled(Card)`
  height: 380px;
  width: 260px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  border: solid 1px #d6d8db;
  border-radius: 3px;
  background-color: #ffffff;
  padding: 8px;
  .ant-card-body {
    padding: 0;
  }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const StyledImg = styled.img`
  object-fit: cover;
  min-width: 150px;
  height: 150px;
  border-bottom: 1px solid #eaebec;
`;

const StyledTitle = styled.div`
  display: flex;
  height: 40px;
  max-height: 40px;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #1b2329;
  .new-badge {
    width: 24px;
    height: 16px;
    flex-grow: 0;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    margin-left: auto;
    width: 32px;
    height: 20px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    padding: 2px 4px;
    border-radius: 2px;
    background: #ff8400;
    color: #fff;
  }
`;

const StyledMiddle = styled.div`
  height: 85px;
  align-self: stretch;
  flex-grow: 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #5a656d;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

const TagsContainer = styled.div`
  min-height: 30px;
  display: block;
  margin-bottom: 4px;
  margin-top: 4px;
  .ant-tag {
    max-width: 150px;
  }
  .tag-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const StyledBottomSection = styled.div`
  height: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 10px;
  .btn-label {
    margin-left: 4px;
  }
`;

const BottomLine = styled.div`
  height: 1px;
  align-self: stretch;
  flex-grow: 0;
  background-color: #d6d8db;
  margin-bottom: 5px;
`;

const PrototypeCardView: FunctionComponent<Props> = ({ catalogEntry }) => {
  const [ showModal, setShowModal] = useState(false); 
  const { title, 
    image_path
    , short_description, type, is_new } = catalogEntry;
    const hasTags = catalogEntry.tags !== null && Array.isArray(catalogEntry.tags);
  const tags = !hasTags ? [] : catalogEntry?.tags?.slice(0, 1) || [];
  const moreTags = !hasTags ? [] : catalogEntry.tags?.slice(1) || [];
  const getImagePath = () => {
    if (!isEmpty(image_path)) {
      return image_path;
    } else if (type === CatalogEntryType.HUGGING_FACE) {
      return HuggingFaceImage;
    }
    return CommunityImage;
  }
  
  return (
    <>
    <StyledCard
    key={title}
    cover={<StyledImg alt={short_description} src={getImagePath()} />}
    bordered
    hoverable
    onClick={() => setShowModal(true)}
  >
    <Card.Meta />
    <StyledTitle>
          <>
            {catalogEntry.title}
            {is_new && <div className="new-badge">New</div>}
          </>
        </StyledTitle>
        <StyledMiddle title={catalogEntry.short_description}>
          {catalogEntry.short_description}
        </StyledMiddle>
        <TagsContainer>
          <Space size={[0, 'small']} wrap>
            {tags.map((tag: string) => (
              <Tag key={tag}>
                <div className="tag-title" title={tag}>
                  {tag}
                </div>
              </Tag>
            ))}
            {moreTags.length > 0 && (
              <Popover
                title="Tags"
                overlayStyle={{
                  width: '400px'
                }}
                content={
                  <Space size={[0, 'small']} wrap>
                    {moreTags.map((tag: string) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Space>
                }
                trigger="hover"
              >
                <Tag>
                  <div className="tag-title">{`+${moreTags.length}`}</div>
                </Tag>
              </Popover>
            )}
          </Space>
        </TagsContainer>
        <StyledBottomSection>
        <div style={{ width: '100%' }}>
          <BottomLine /> 
          <PrototypeBadge catalogEntry={catalogEntry} />
        </div>
      </StyledBottomSection>
    </StyledCard>
    {showModal && <AppliedPrototypeModal catalogEntry={catalogEntry} onClose={() => setShowModal(false)}/>}
    </>
  );    
}

export default PrototypeCardView;