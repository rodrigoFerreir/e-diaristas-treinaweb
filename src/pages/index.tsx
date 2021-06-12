import PageTitle from "ui/components/data-display/Page-Title/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.styles";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import useIndex from "data/hooks/pages/useIndex.page";
export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    BuscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subTitle={"Preencha seu endereço e veja os profissionais da sua região"}
      />
      <Container>
        <FormContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => BuscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                  onClick={() =>
                    alert(
                      "Aguarde😐. Estamos desenvolvendo esta página! Obrigado😁"
                    )
                  }
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponivel em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
