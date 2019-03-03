import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import activities from '../images/activities.svg'
import restaurants from '../images/restaurants.svg'
import shopping from '../images/shopping.svg'

const List = styled.ul`
  display: flex;
  width: 60vw;
  flex-direction: column;
  align-items: center;
  text-align: center;
  hr {
    width: 40%;
  }
  li {
    text-align: center;
    font-size: 13px;
    list-style-type: none;
    a {
      font-size: 15px;
      font-family: 'Josefin Slab', georgia, serif;
      color: rust;
    }
    p {
      line-height: 14px;
    }
  }
  @media screen and (max-width: 792px) {
    width: 90vw;
    ul {
      margin-left: -20px;
    }
    hr {
      width: 80vw;
    }
    li {
      width: 60vw;
    }
  }
`

const ThingsToDo = () => (
  <Layout>
    <SEO title="Things to Do" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <List>
        <h1>Things to Do</h1>
        <p>
          &quot;We&apos;re excited as heck for y&apos;all&apos;s wedding, but
          what else is there to do?&quot;
        </p>
        <p>
          We know you are all coming from a spectrum of distances, and taking
          time out of your otherwise busy lives to share this day with us. We
          hope you are able to spend a few relaxing days in Southern Vermont,
          enjoying the beautiful landscape, and doing things that you will
          enjoy! While we will be working hard to prepare our ceremony and
          celebration, here are some of the cool activities that you might also
          plan on checking out.
        </p>
        <h3>Some options</h3>
        <div>
          <hr />
        </div>
        <List>
          <hr />
          <br />
          <li style={{ listStyleImage: `url(${activities})` }}>
            <details>
              <summary
                style={{
                  display: `flex`,
                  width: `100%`,
                  flexDirection: `row`,
                  justifyContent: `space-around`,
                }}
              >
                <h4>Activities</h4>
              </summary>
              <br />
              <ul style={{ listStyleType: `none` }}>
                <li>
                  <details>
                    <summary>Kayaking on the Connecticut River</summary>
                    <ul>
                      <li>
                        <a
                          href="https://www.vermontcanoetouringcenter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Vermont Canoe Touring Center
                        </a>
                        <br />
                        <p>≈ 30 minute drive South of Westminster</p>
                      </li>
                      <li>
                        <a
                          href="https://greatriveroutfitters.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Great River Outfitters
                        </a>
                        <br />
                        <p>≈ 40 minute drive North of Westminster</p>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Hiking Trails</summary>
                    <ul>
                      <li>
                        <a
                          href="http://www.nhfamilyhikes.com/hikes.php?hike=Mt.%20Kilburn%20(Fall%20Mountain)"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mt. Kilburn (Fall Mountain)
                        </a>
                        <br />{' '}
                        <p>
                          Just over the river in Walpole, NH. Provides a
                          picturesque view of downtown Bellows Falls.
                        </p>
                      </li>
                      <li>
                        <a
                          href="http://putmta.org/trails/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Putney Mountain Trails
                        </a>
                        <br />
                        <p>
                          Some nice and relatively easy day hikes in the hills
                          of Putney / North Westminster
                        </p>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Riding Bikes</summary>
                    <ul>
                      <li>
                        <a
                          href="https://www.westhillshop.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          West Hill Shop
                        </a>
                        <br />
                        <p>
                          Great resource for information, and they offer
                          rentals!
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://greatriveroutfitters.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bike Maps
                        </a>
                        <br />
                        <p>
                          Detailed &qpos;Bicycle Suitability Maps&qpos; from
                          Windham Regional Commission
                        </p>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Pottery, craft & art galleries</summary>
                    <ul>
                      <li>
                        <p>
                          Best to{' '}
                          <a
                            href="https://www.google.com/search?q=pottery+craft+art+gallery+southern+Vermont"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google
                          </a>{' '}
                          those
                        </p>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <hr />
          <br />
          <li style={{ listStyleImage: `url(${restaurants})` }}>
            <details>
              <summary
                style={{
                  display: `flex`,
                  width: `100%`,
                  flexDirection: `row`,
                  justifyContent: `space-around`,
                }}
              >
                <h4>Restaurants</h4>
              </summary>
              <br />
              <ul style={{ listStyleType: `none` }}>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://popolomeanspeople.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Popolo
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://wunderbarvt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wunderbar
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.jdmcclimentspub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    J.D. McCliment&qpos;s
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.graftoninnvermont.com/dining/phelps-barn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Phelp&qpos;s Barn at The Grafton Inn
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.facebook.com/Moon-Dog-Cafe-122742564429734/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Moon Dog Cafe
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://harlowfarm.com/cafe-loco/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cafe Loco
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://www.47mainwalpole.com/the-restaurant.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Restaurant at Burdick&qpos;s
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <hr />
          <br />
          <li style={{ listStyleImage: `url(${shopping})` }}>
            <details>
              <summary
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  justifyContent: `space-around`,
                  width: `100%`,
                }}
              >
                <h4>Shopping</h4>
              </summary>
              <br />
              <ul style={{ listStyleType: `none` }}>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.spinnery.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Green Mountain spinnery
                  </a>
                  <p style={{ fontSize: `15px` }}>Natural Fiber Yarns</p>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.rugglesandhunt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ruggles & Hunt
                  </a>
                  <p style={{ fontSize: `15px` }}>
                    Purveyors of Staple & Fancy Goods
                  </p>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.villagesquarebooks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Village Square Booksellers
                  </a>
                  <p style={{ fontSize: `15px` }}>Books - Toys - Gifts</p>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.facebook.com/Swirlresale/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swirl
                  </a>
                  <p style={{ fontSize: `15px` }}>Vintage Resale</p>
                </li>

                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://harlowfarm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Harlow Farm
                  </a>
                  <p style={{ fontSize: `15px` }}>
                    Classic Vermont Organic Farmstand
                  </p>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="https://www.putneyfood.coop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Putney Co-op
                  </a>
                  <p style={{ fontSize: `15px` }}>
                    One-of-a-kind co-op food market in Putney
                  </p>
                </li>
                <li>
                  <a
                    style={{ fontFamily: `inherit` }}
                    href="http://www.brattleboro.com/shopping-downtown/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Downtown Brattloeboro
                  </a>
                  <p style={{ fontSize: `15px` }}>Lots of choices!</p>
                </li>
              </ul>
            </details>
          </li>
          <hr />
        </List>
        <Link to="/">Go back to the homepage</Link>
      </List>
    </div>
  </Layout>
)

export default ThingsToDo
