import { AtomicResultLink, AtomicResultSectionEmphasized, AtomicResultSectionExcerpt, AtomicResultSectionTitle, AtomicResultText, AtomicText, Result } from "@coveo/atomic-react";

const MyResultTemplateForSalesforceCases: React.FC<{result: Result}> = ({
    result,
  }) => {
    return (
      <>
        <AtomicResultSectionTitle>
          <AtomicResultLink />
        </AtomicResultSectionTitle>
        <AtomicResultSectionExcerpt>
          <AtomicResultText field="excerpt" />
        </AtomicResultSectionExcerpt>
        <AtomicResultSectionEmphasized>
          {result.raw.sfpriority !== undefined && (
            <>
              <AtomicText value="Priority" />
              <AtomicResultText field="sfpriority" />
            </>
          )}
          {result.raw.sfstatus !== undefined && (
            <>
              <AtomicText value="Status" />
              <AtomicResultText field="sfstatus" />
            </>
          )}
        </AtomicResultSectionEmphasized>
      </>
    );
  };

  export default MyResultTemplateForSalesforceCases;