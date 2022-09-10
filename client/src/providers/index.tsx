import { FormProvider } from "./formProvider/formProvider";
import { FormStepProvider } from "./formStep/formStep";
import { ListProductProvider } from "./list/list";

export const Providers = ({ children }: any) => {
  return (
    <FormProvider>
      <FormStepProvider>
        <ListProductProvider>{children}</ListProductProvider>
      </FormStepProvider>
    </FormProvider>
  );
};
