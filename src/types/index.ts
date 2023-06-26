
export interface ProjectItem {
  id: string
  preview: string
  previewSize: [number, number] | undefined
  repoName: string
  repoLink: string
  shortDesc: string
  mappedComponent: string
}

export interface ProjectListType {
  projects: ProjectItem[]
}