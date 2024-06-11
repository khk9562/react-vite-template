import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";

const FormPage = () => {
  const form = useFormField();
  return (
    <Form>
      <FormField
        control={form.control}
        name="폼이름"
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl>이거 먼데</FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

export default FormPage;
