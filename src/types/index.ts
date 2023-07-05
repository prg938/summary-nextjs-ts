
export interface ProjectItem {
  id: string
  preview: string
  previewSize: [number, number] | undefined
  repoName: string
  repoLink: string
  shortDesc: string
  mappedComponent: string
}
export interface ProjectListType {projects: ProjectItem[]}

export interface BlogItemType {
  id: string
  date: string
  title: string
  tags: Array<string>
  mappedComponent: string
}
export type BlogItemsType = {items: BlogItemType[]}