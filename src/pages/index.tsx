import PageTitle from "ui/components/data-display/Page-Title/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subTitle={"Preencha seu endereço e veja os profissionais da sua região"}
      />
      <UserInformation
        name={"Rodrigo Ferreira"}
        picture={""}
        rating={4}
        description={"Pernambuco"}
      />
    </div>
  );
}
