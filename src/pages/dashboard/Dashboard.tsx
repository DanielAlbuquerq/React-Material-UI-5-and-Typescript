import { PageBaseLayout } from "../../shared/layouts"
import React from "react"
import { ListOfTools } from "../../shared/components"

export const Dashboard = () => {
  return (
    <PageBaseLayout title='initial-page'>
      <ListOfTools showSearchInput />
    </PageBaseLayout>
  )
}
