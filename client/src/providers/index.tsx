import { FormProvider } from "./formProvider/formProvider";
import { FormStepProvider } from "./formStep/formStep";

export const Providers = ({ children }: any) => {
  return (
    <FormProvider>
      <FormStepProvider>{children}</FormStepProvider>
    </FormProvider>
  );
};
