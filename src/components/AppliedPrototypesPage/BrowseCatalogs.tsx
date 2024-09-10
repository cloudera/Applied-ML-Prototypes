import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useCommunityAmps } from './hooks';
import { CatalogEntry, CatalogEntryType } from '../types';
import PrototypeCardView from './PrototypeCardView';

interface Props {
  catalogEntryType: CatalogEntryType;
};

const Container = styled.div`
  color: #315768;
  display: inline-block;
  svg {
    transition-duration: .1s;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
  }
  .icon-wrapper {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
  }
  .row-wrapper {
    display: flex;
    color: #315768;
    margin-bottom: .5rem;
    .row-title {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }   
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
  overflow: auto scroll;
  margin-top: 16px;
  .grid-view-nodata {
    margin: auto;
    margin-top: 24px;
    color: #838b92;
    font-size: 12px;
  }
`;

const BrowseCatalog: FunctionComponent<Props> = ({ catalogEntryType }) => {
  const listCommunityAmpsReq = useCommunityAmps(catalogEntryType);
  const { catalogEntries } = listCommunityAmpsReq;
  return (
    <Container>
      <Row>
        <Col sm={24}>
          <div className="row-wrapper"> 
            <div className="icon-wrapper">
            <svg aria-hidden="true" className="mr-1 inline h-4 w-4 transition duration-100 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.441 7h-2.882l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26zm9.118 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.577 0 1.061.299 1.343 1h20.03c.28-.699.766-1 1.343-1h.641v-2h-24zm21.213 5h-18.425l1.204 3h16.016l1.205-3zm-16.417 5l1.204 3h12l1.205-3h-14.409z"></path></svg>   
            
            </div>
            <div className="row-title">Browse the Catalog</div>
          </div>
          <CardsContainer>
        {catalogEntries.map((catalogEntry: CatalogEntry) => (
          <PrototypeCardView catalogEntry={catalogEntry} key={catalogEntry.id} />
        ))}
        
      </CardsContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default BrowseCatalog;
