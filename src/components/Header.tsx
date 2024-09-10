import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Flex from 'cuix/components/Flex';
import ClouderaLogo from '../images/cloudera.webp';
import { Button } from 'antd';
import { CatalogEntryType } from './types';


interface Props {
  onSelect: (type: CatalogEntryType) => void;
  catalogEntryType: CatalogEntryType;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  background-color: #315768;
  height: 48px;
  .header-container {
    max-width: 1220px;
    margin: auto;
    padding-left: .25rem;
  }
  .header-row {
    margin: auto;
    height: 48px;
    margin: auto;
    img {
      height: 1.4em;
    }
    .app-title {
      font-size: .875rem;
      line-height: 1.25rem;
      margin-right: .25rem;
      margin-left: .25rem;
      margin-top: auto;
      margin-bottom: auto;
      color: rgba(255, 255, 255, 1);
    }
    .navbarlinks {
      display: flex;
    }  
    .navbarlinks a {
      text-decoration: none;
      color: #fff;
      width: 100%;
      line-height: 3.1em;
      border-bottom: 4px solid #242424;
      padding: 0 12px;
      font-size: .875rem;
      line-height: 3.1em;
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 12px;
    }
    .navbarlinks.selected, .navbarlinks a.active, .navbarlinks a.active:hover {
      border-bottom: 4px solid #f66303;
      line-height: 3.1em;
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 12px;
    }      
  }
`;

const Header: FunctionComponent<Props> = ({ onSelect, catalogEntryType }) => {

  return (
    <Container>
      <div className='header-container'>
      <div className="header-row" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', height: '%100' }}>
        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <a href="/Applied-ML-Prototypes/#">
            <img className="headericon" src={ClouderaLogo} alt="Cloudera"/>
          </a>
        </div>
        <div className='app-title'>
        Accelerators for ML Projects
        </div>
        <div className='navbarlinks' onClick={() => onSelect(CatalogEntryType.CLOUDERA_AMPS)}>
          <a className={catalogEntryType === CatalogEntryType.CLOUDERA_AMPS ? 'active' : ''}>Cloudera</a>
        </div>
       
        <div className='navbarlinks' onClick={() => onSelect(CatalogEntryType.HUGGING_FACE)}>
          <a className={catalogEntryType === CatalogEntryType.HUGGING_FACE ? 'active' : ''}>HuggingFace Spaces</a>
        </div>
        <div className='navbarlinks' onClick={() => onSelect(CatalogEntryType.COMMUNITY_AMPS)}>
          <a className={catalogEntryType === CatalogEntryType.COMMUNITY_AMPS ? 'active' : ''}>Community</a>
        </div>
      </div>
      </div>
    </Container>
  );    
}

export default Header;
