import { Technology } from "./helpersTypes";

export function useNode(technologies: Technology[]): string {
  const list = technologies.reduce((str: string, technology: Technology) => {
    if (technology.poweredByNodejs) {
      return (str += `<li>${technology.name}</li>\n`);
    }

    return str;
  }, "");

  return `<ul>${list}</ul>`;
}
