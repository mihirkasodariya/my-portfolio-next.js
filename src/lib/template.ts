import ejs from "ejs";
import { join } from "path";
import { readFile } from "fs/promises";

export async function renderTemplate(templateName: string, data: Record<string, any>) {
  const templatePath = join(process.cwd(), "src", "templates", `${templateName}.ejs`);
  const fileContent = await readFile(templatePath, "utf8");
  return ejs.render(fileContent, data);
}
