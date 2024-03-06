import { AtomicFacet, AtomicFacetManager, AtomicLayoutSection, AtomicLoadMoreResults, AtomicRefineToggle, AtomicResultList, AtomicSearchBox, AtomicSearchInterface, AtomicSearchLayout, AtomicTimeframe, AtomicTimeframeFacet, buildSearchEngine, getOrganizationEndpoints, getSampleSearchEngineConfiguration } from "@coveo/atomic-react";
import MyResultTemplateFunction from "./MyResultTemplateFunction";
import MyResultTemplateForSample from "./MyResultTemplateForSample";

const MyPage = () => {
    const engine = buildSearchEngine({
      configuration: {
        accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
        organizationEndpoints: getOrganizationEndpoints('searchuisamples'),
        organizationId: 'searchuisamples'
      }
    });
    return (
      <AtomicSearchInterface engine={engine}>
        <AtomicSearchLayout>
          <AtomicLayoutSection section="search">
            <AtomicSearchBox></AtomicSearchBox>
          </AtomicLayoutSection>

          <AtomicLayoutSection section="facets">
            <AtomicFacetManager> 
              <AtomicFacet
                field="source"
                label="Source"
              ></AtomicFacet> 
              <AtomicFacet
                field="language"
                label="Language"
              ></AtomicFacet>
              <AtomicTimeframeFacet
                label="Timeframe"
                with-date-picker="true"
                is-collapsed="true"
                > 
                <AtomicTimeframe unit="hour"></AtomicTimeframe>
                <AtomicTimeframe unit="day"></AtomicTimeframe>
                <AtomicTimeframe unit="week"></AtomicTimeframe>
                <AtomicTimeframe unit="month"></AtomicTimeframe>
                <AtomicTimeframe unit="quarter"></AtomicTimeframe>
                <AtomicTimeframe unit="year"></AtomicTimeframe>
              </AtomicTimeframeFacet>
            </AtomicFacetManager>
          </AtomicLayoutSection>

          <AtomicLayoutSection section="main">
            <AtomicLayoutSection section="status">
              <AtomicRefineToggle></AtomicRefineToggle>
            </AtomicLayoutSection>

            <AtomicLayoutSection section="results">
              <AtomicResultList template={MyResultTemplateFunction}/> 
            </AtomicLayoutSection>

            <AtomicLayoutSection section="pagination">
              <AtomicLoadMoreResults></AtomicLoadMoreResults>
            </AtomicLayoutSection>
          </AtomicLayoutSection>

        </AtomicSearchLayout>

  
  





  </AtomicSearchInterface>

    );
  };

export default MyPage;