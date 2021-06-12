import { useState, useMemo } from "react";
import { UseShortInterfaces } from "data/@types/UserInterfaces";
import { ValidationService } from "data/services/ValidationService";
import { apiService } from "data/services/apiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UseShortInterfaces[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function BuscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");
    try {
      const { data } = await apiService.get<{
        diaristas: UseShortInterfaces[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }
    setBuscaFeita(true);
  }

  return {
    cep,
    setCep,
    cepValido,
    BuscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
