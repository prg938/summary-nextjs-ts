
export interface ProjectItem {
  id: number,
  preview: string,
  previewSize: [number, number] | undefined
  repoName: string,
  repoLink: string,
  desc: string
}