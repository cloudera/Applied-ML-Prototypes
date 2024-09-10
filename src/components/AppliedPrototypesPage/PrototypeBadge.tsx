import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Badge } from 'antd';
import ClouderaIcon from '../icons/ClouderaIcon';
import CommunityIcon from '../icons/CommunityIcon';
import HuggingFaceIcon from '../icons/HuggingFaceIcon';
import { CatalogEntryType } from './hooks';
import { CatalogEntry } from '../types';


interface Props {
  catalogEntry: CatalogEntry;
}

const ClouderaBadge = styled(Badge)`
  padding: 4px 8px;
  height: 24px;
  flex-grow: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 20px;
  color: #5a656d;
  background-color: #ffbe73;
  .icon {
    margin-top: 2px;
  }
  .label {
    flex-grow: 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #3d1300;
    padding-left: 4px;
  }
`;

const HuggingFaceBadge = styled(Badge)`
  padding: 4px 8px;
  border-radius: 20px;
  background-color: #fdeaa3;
  color: #5a656d;
  .icon {
    margin-top: 2px;
  }
  .label {
    flex-grow: 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #403200;
    padding-left: 4px;
  }
`;

const CommunityBadge = styled(Badge)`
  padding: 4px 8px;
  border-radius: 20px;
  background-color: #8cf28c;
  color: #5a656d;
  .icon {
    margin-top: 2px;
  }
  .label {
    flex-grow: 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #3d1300;
    padding-left: 4px;
  }
`;

const CustomBadge = styled(Badge)`
  padding: 4px 8px;
  height: 24px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 20px;
  color: #5a656d;
  background-color: #cfddff;
  .icon {
    margin-top: 4px;
  }
  .custom-label {
    flex-grow: 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #3d1300;
    padding-left: 4px;
    padding-top: 4px;
  }
`;

const Flex = styled.div`
  display: flex;
`

const PrototypeBadge: FunctionComponent<Props> = ({ catalogEntry }) => {
  const { type } = catalogEntry;

  const renderBadge = (type: string) => {
    switch (type) {
      case CatalogEntryType.CLOUDERA_AMPS:
        return (
          <ClouderaBadge>
            <Flex>
              <div className="icon">
                <ClouderaIcon />
              </div>
              <div className="label">Cloudera AMPs</div>
            </Flex>
          </ClouderaBadge>
        );
      case CatalogEntryType.HUGGING_FACE:
        return (
          <HuggingFaceBadge>
            <Flex>
              <div className="icon">
                <HuggingFaceIcon />
              </div>
              <div className="label">HuggingFace</div>
            </Flex>
          </HuggingFaceBadge>
        );
      case CatalogEntryType.COMMUNITY_AMPS:
        return (
          <CommunityBadge>
            <Flex>
              <div className="icon">
                <CommunityIcon />
              </div>
              <div className="label">Community AMPs</div>
            </Flex>
          </CommunityBadge>
        );
      default:
        return null;
    }
  };

  return renderBadge(type as CatalogEntryType);
};

export default PrototypeBadge;
