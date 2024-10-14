import { PageBaseLayout } from "../../shared/layouts"
import React from "react"
import { ListOfTools, ToolsOfDetails } from "../../shared/components"

export const Dashboard = () => {
  return (
    <PageBaseLayout title='initial-page' toolsBar={<ToolsOfDetails />}>
      <ListOfTools showSearchInput />
    </PageBaseLayout>
  )
}
