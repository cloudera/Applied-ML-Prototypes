import get from 'lodash/get';
import React, { FunctionComponent } from 'react';
import { CatalogEntry } from '../types'
import { Button, Col, Modal, Row,  Space, Tag } from 'antd';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';
import PrototypeBadge from './PrototypeBadge';


interface Props {
  catalogEntry: CatalogEntry; 
  onClose: () => void;   
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    max-height: 760px;
    width: 750px;
    .ant-modal-body {
      min-height: 400px;
    }
  }
`;

const StyledTitle = styled.div`
  height: 28px;
  flex-grow: 1;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #1b2329;
`;

const StyledMarginBottom = styled.div`
  margin-bottom: 10px;
`;

const StyledSpanMarginLeft = styled.span`
  margin-left: 5px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;


const AppliedPrototypeModal: FunctionComponent<Props> = ({ catalogEntry, onClose }) => {
  const { title, git_url } = catalogEntry;
  let description = catalogEntry.long_description || catalogEntry.short_description;
  const tags = get(catalogEntry, 'tags') || [];

  return (
    <StyledModal
    title={<StyledTitle>{title}</StyledTitle>}
    visible={!!catalogEntry}
    onCancel={() => onClose()}
    okButtonProps={{ style: { display: 'none' } }}
    footer={
           <Row>
              <Col sm={24}>
                <Flex>
                <Button
                    rel="noreferrer"
                    target="_blank"
                    type="primary"
                    href={git_url}
                    style={{ marginLeft: '8px' }}
                  >
                    {/* <GithubOutlined /> */}
                    <StyledSpanMarginLeft>
                      View on Github
                    </StyledSpanMarginLeft>
                  </Button>
                  <Button style={{ marginLeft: '8px' }} onClick={() => onClose()}>Cancel</Button>
                  
                </Flex>
              </Col>
            </Row>
    }>
      <div style={{ marginBottom: '18px' }}>
        <PrototypeBadge catalogEntry={catalogEntry} />
      </div>
      
      <h4>Details</h4>
      <StyledMarginBottom>
            <div
              dangerouslySetInnerHTML={{
                __html: description.replace(/(<? *script)/gi, 'illegalscript')
              }}
            />
          </StyledMarginBottom>
          <br />
          <h4>Tags</h4>
          <div style={{ height: '73px', display: 'block' }}>
            {!catalogEntry.coming_soon && (
              <Space size={[0, 'small']} wrap>
                {tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            )}
          </div>

    </StyledModal>
  )

}

export default AppliedPrototypeModal;