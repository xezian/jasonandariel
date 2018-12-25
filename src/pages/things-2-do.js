import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import activities from '../images/activities.svg'
import restaurants from '../images/restaurants.svg'
import shopping from '../images/shopping.svg'

const ThingsToDo = () => (
  <Layout>
    <SEO title="Things to Do" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>Things to Do</h1>
      <p>
        "We're excited as heck for y'all's wedding, but what else is there to
        do?"
      </p>
      <p>
        We know you are all coming from a spectrum of distances, and taking time
        out of your otherwise busy lives to share this day with us. We hope you
        are able to spend a few relaxing days in Southern Vermont, enjoying the
        beautiful landscape, and doing things that you will enjoy! While we will
        be working hard to prepare our ceremony and celebration, here are some
        of the cool activities that you might also plan on checking out.
      </p>
      <h3>Some options</h3>
      <ul style={{ maxWidth: `40vw`, margin: `0 auto` }}>
        <hr />
        <li style={{ listStyleImage: `url(${activities})` }}>
          <h4>Activities</h4>
          <ul style={{ listStyleType: `none` }}>
            <li>Kayaking on the River</li>
            <li>Hiking trails</li>
            <li>Pottery, craft & art galleries</li>
          </ul>
        </li>
        <hr />
        <li style={{ listStyleImage: `url(${restaurants})` }}>
          <h4>Restaurants</h4>
          <ul style={{ listStyleType: `none` }}>
            <li>Popolo</li>
            <li>J.D. McCliments</li>
            <li>The Restaurant at Burdick's</li>
          </ul>
        </li>
        <hr />
        <li style={{ listStyleImage: `url(${shopping})` }}>
          <h4>Shopping</h4>
          <ul style={{ listStyleType: `none` }}>
            <li>Basketville</li>
            <li>The Spinnery</li>
            <li>Swirl</li>
            <li>Harlow Farmstand</li>
            <li>Allen Brother's</li>
            <li>The Putney Co-op</li>
          </ul>
        </li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ThingsToDo
