import React, { Component } from 'react'
import './software.css';
import Grid from '@material-ui/core/Grid'
import VGCharts from '../../assets/recent_console_releases_by_year.png'

export class Software extends Component {
  render() {
    return (
      <div className="softwareSection">
        <Grid container>
          <Grid item xs={8}>
            <div className="softwareItem">
              <div className="softwareTitle">vg-charts</div>
              <div className="softwareLink"><a href="https://github.com/Stakes84/vg-charts">https://github.com/Stakes84/vg-charts</a></div>
              <div className="softwareDescription">
                A simple library for generating various graphs based on Video Game statistics.
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="softwareImage">
              <a href="https://github.com/Stakes84/vg-charts">
                <img src={VGCharts} alt="Link to VG Charts github"/>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Software