import React, {Component} from 'react';
import './SideBar.css';
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from "../helper/idTables";

class SideBar extends Component {
  importAll (r) {
    let images = {}
    // eslint-disable-next-line
    r.keys().map(item => { images[item.replace('./', '')] = r(item) })
    return images
  }


  render () {
    const { category} = this.props;
    const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
    return(
      <div className='sideBar'>
        <div className="category-title-image-wrapper" >
          <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' />
        </div>
        <div className="titleCategoryDisplay">
          {category}
        </div>
        <div className="category-title-image-wrapper" >
          <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' />
        </div>
      </div>
    )
  }
}

export default BackFrame(SideBar)
