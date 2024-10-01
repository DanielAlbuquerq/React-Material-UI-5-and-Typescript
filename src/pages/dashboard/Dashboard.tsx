import { PageBaseLayout } from "../../shared/layouts"
import React from "react"
import { Toolsbar } from "../../shared/components"

export const Dashboard = () => {
  return (
    <PageBaseLayout title='initial-page'>
      <Toolsbar showSearchInput />
    </PageBaseLayout>
  )
}
