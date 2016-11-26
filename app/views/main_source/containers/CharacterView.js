import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
import ProgressMaker from '../components/progressMaker';
// import ReactArt from 'react-art';
function changeColor(perc){
  if(perc <= 50) {
    return `rgba(0,255,0, 1)`;
  } else if (perc <= 75) {
    return `rgba(255,255,0, 1)`;
  } else if (perc > 75) {
    return `rgba(255,0,0, 1)`;
  }
}
class CharacterView extends Component {
  constructor (props) {
    super(props);
    this.state ={
      duration: 0,
      percentage: 20
    }
  }
  componentDidMount(){
    this.setState({duration:20})
  }
  displayStatContainer(statName){
    return(
      <div className={`stat-container`}>
        <div>
          <div className={`stat-header`}>
            <h2>{statName}</h2>
            <span>15</span>
          </div>
          <div className={`stat-bonus`}>
            <h1>10</h1>
          </div>
          <div className={`stat-other-bonus-container`}>
            <div>
              <h6>Base</h6>
              <span>15</span>
            </div>
            <div>
              <h6>Racial</h6>
              <span>+15</span>
            </div>
            <div>
              <h6>Inc.</h6>
              <span>-15</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    let {character} = this.props;
    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>
            {`Character View`}
            <span className={`pull-right`}>
              <Link className={`btn btn-info`} to={`player/${character.pid}/character/new`}>Create Character</Link>
              <Link className={`btn btn-info`} to={`player/${character.pid}/character/${character.id}/edit`}>Edit Character</Link>
            </span>
          </h3>
        </hgroup>

        <div className="Layout DnD5echaracterView scroll3">
          <div className={`section`}>
            <div className={`health-box`}>
              <ProgressMaker strokeWidth="18" radius="90" color="rgba(45, 45, 45, 1.00)" bgcolor={changeColor(this.state.percentage)} percentage={this.state.percentage}/>
              <div style={{backgroundImage: 'url(' + character.AvatarUri + ')' }} className="characterAvatar" ></div>
            </div>
            <div className={`experience-box`}>
              <p>...</p>
            </div>
          </div>
          <div className={`section`}>
            <div className={`stat-box`}>

              <div className={`stat-box-row`}>
                {this.displayStatContainer(`Strength`)}
                {this.displayStatContainer(`Dexterity`)}
                {this.displayStatContainer(`Constitution`)}
              </div>

              <div className={`stat-box-row`}>
                {this.displayStatContainer(`Intelligence`)}
                {this.displayStatContainer(`Wisdom`)}
                {this.displayStatContainer(`Charisma`)}
              </div>

              <div style={{flex:1,  display:'flex', backgroundColor: 'red', height: '260px'}}>
                <p>test</p>
              </div>
            </div>

            <div style={{flex:1, maxWidth: '300px', marginLeft: '30px', display:'flex', flexDirection: 'column'}}>
              <div style={{flex:1,  backgroundColor: 'white', maxHeight:'260px', marginBottom: '30px'}}></div>
              <div style={{flex:1,  backgroundColor: 'white', height:'300px'}}></div>
            </div>
          </div>
          {/* <p>{`I am ${character.characterName}`}</p> */}
          {/* <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link> */}
        </div>
      </div>
    );
  }
}

CharacterView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    character: state.Character.selected_character,
  }
}
export default connect(mapStateToProps)(CharacterView)
