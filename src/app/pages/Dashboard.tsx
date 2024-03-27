import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import { CardData } from '../constant/CardData'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-4">
            {CardData.map((card, index) => (
                <Cards key={index} {...card} />
            ))}
        </div>
    </div>
  )
}

export default Dashboard