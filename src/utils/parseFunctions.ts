import languages from '../assets/iso-639-1.json';

enum Statuses {
 "Rumored" = "Rumor",
 "Planned" = "Planejado",
 "In Production" = "Em produção",
 "Post Production" = "Pós Produção",
 "Released" = "Lançado",
 "Canceled" = "Cancelado"
}
export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'USD',
  }).format(value);


export const parseRuntime = (runtime: number): string => {
  let hours = Math.floor(runtime / 60);
  let minutes = runtime - hours * 60;
  console.log(hours, minutes)
  return `${hours}h${minutes}m`;
}
export const parseLanguage = (language: string): string => {
  let findLanguage = languages.find((idioma) => idioma.code === language);
  return findLanguage?.name || "Inglês"
}

export const parseDate = (date: string): string => {
  let splitDate = date.split('-')

  return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
}

export const parseStatus = (status: string) => {
return Statuses[status as keyof typeof Statuses]
}
