import { Toolsbar } from "../../shared/components"
import { PageBaseLayout } from "../../shared/layouts"
import React from "react"

export const Dashboard = () => {
  return (
    <PageBaseLayout toolsBar={<Toolsbar />} title='initial-page'>
      <h1>daniel</h1>
    </PageBaseLayout>
  )
}
