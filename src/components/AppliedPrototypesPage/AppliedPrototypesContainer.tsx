import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeroImage from '../../images/hero.jpg';
import BrowseCatalog from './BrowseCatalogs';
import { CatalogEntryType } from '../types';
import DocumentationSection from './DocumentationSection';
import { 
  CLOUDERA_AMP_TYPE_SECTION_TEXT, 
  HUGGINGFACE_AMP_TYPE_SECTION_TEXT, 
  COMMUNITY_AMP_TYPE_SECTION_TEXT 
} from './constants';

const Content = Layout.Content;


interface Props {
  catalogEntryType: CatalogEntryType;    
}

const PageContainer = styled.div`
  display: block;
  unicode-bidi: isolate;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  .container-fluid {
    max-width: 1220px;
    margin: auto;
    padding-top: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  grid-template-columns: auto auto;
  gap: 10px;
  // grid-auto-rows: minmax(100px, auto);
  .column-1 {
  grid-column: 1 / 2;
  grid-row: 1;
}
.column-2 {
  grid-column: 2 / 2;
  grid-row: 1;
  img {
    width: 600px;
  }
}
.section-header-label {
  text-transform: uppercase;
  padding-left: .75rem;
  padding-right: .75rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: .75rem;
  line-height: 1rem;
  border-radius: .25rem;
  background-color: rgba(229, 231, 235, 1); 
}  
.section-header-link {
  margin-left: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  rgba(75, 85, 99, 1);
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -webkit-transition: color .3s;
  transition: color .3s;
}  
.section-title {
  color: #315768;
  margin-top: 1rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  text-align: left;
}  
.section-content {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(75, 85, 99, 1);
}  
.section-list-content {
  padding-top: .75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(75, 85, 99, 1);
}
  .mt-1 {
    margin-top: .25rem;
  }
  .mr-1 {
    margin-right: .25rem;
  }  
  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }  

`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;


const AppliedPrototypesContainer: FunctionComponent<Props> = ({ catalogEntryType }) => {

  return (
    <Content style={{ width: '100%', flexGrow: 1 }}>
      <PageContainer className="bg-white pb-20  px-4">
        <div className="container-fluid pt-8">
        <Grid>
            <div className="column-1 pr-7">
              <LeftColumn>
                {/* <div style={{ marginTop: '3.5rem', textAlign: 'left' }}>
                    <span className="section-header-label" style={{ textTransform: 'uppercase' }}>WHATS NEW</span>
                    <a className="section-header-link" href="https://github.com/cloudera/Applied-ML-Prototypes">Just shipped catalog version 0.0.1 &gt; </a>
                </div> */}
                <div className="section-title">
                Accelerators for ML Projects (AMPs)
                </div>
                <div className="section-content">
                 {catalogEntryType === CatalogEntryType.CLOUDERA_AMPS && CLOUDERA_AMP_TYPE_SECTION_TEXT}
                 {catalogEntryType === CatalogEntryType.HUGGING_FACE && HUGGINGFACE_AMP_TYPE_SECTION_TEXT}
                 {catalogEntryType === CatalogEntryType.COMMUNITY_AMPS && COMMUNITY_AMP_TYPE_SECTION_TEXT}
                 {/* AMPs are ML projects that can be deployed with one click directly from Cloudera Machine Learning (CML). AMPs enable data scientists to go from an idea to a fully working ML use case in a fraction of the time. It provides an end-to-end framework for building, deploying, and monitoring business-ready ML applications instantly. */}
                </div>
                <div className="section-list-content">
                 <div className="text-base">
                   <span className="font-bold mr-1">→</span>
                   Prototypes encode best practices for solving machine problems.
                 </div>
                 <div className="text-base">
                   <span className="font-bold mr-1">→</span>
                   Each step in the solution (e.g. data ingest, model training, model serving etc.) is declared in a yaml configuration file.
                 </div>
                 <div className="text-base">
                   <span className="font-bold mr-1">→</span>
                   Run examples locally or automatically deploy steps within your configuration file using Cloudera Machine Learning.

                 </div>
                </div>    
                <div className="mt-6">
                  <div className="text-xs mb-2"> Want to learn more? </div>
                  <div>
                   <a target="_blank" rel="noreferrer" href="https://docs.cloudera.com/machine-learning/cloud/applied-ml-prototypes/topics/ml-amps-overview.html" className="group  pr-7 transition duration-500 hover:opacity-90 hover:text-white text-base inline-block rounded  bg-cgreen py-3 px-4 font-semibold text-white"> 
                   AMP Documentation 
                   <span className="ml-1 inline-block transition transform group-hover:translate-x-2 duration-500"> → </span>
                   </a></div>
                </div>

              </LeftColumn>
            </div>
            <div className="column-2 md:pt-16" style={{ perspective: '600px' }}> 
            <div style={{ transform: 'rotateY(15deg)' }}>
             <img src={HeroImage} />
             <div className="p-4 text-white bg-cgreen"> Complete examples of ML in action with a single click.</div>
            </div>
            </div> 
        
        </Grid>
        <BrowseCatalog catalogEntryType={catalogEntryType} />
        <DocumentationSection />
        </div>
      </PageContainer>   
    </Content>
  );    
}

export default AppliedPrototypesContainer;