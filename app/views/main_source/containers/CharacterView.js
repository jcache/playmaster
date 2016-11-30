import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ipcRenderer, remote } from 'electron';
import { connect }  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
import ProgressMaker from '../components/progressMaker';
import { LoadCharacter } from '../actions/CharacterActions';
import { IoNavicon } from 'react-icons/lib/io';

function changeColor(perc) {
  if (perc <= 50) {
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
    this.state = {
      percentage: 0,
      character: { stats: {}},
    }
  } 

  componentWillMount() {
    console.log(this.props);
    this.props.dispatch(LoadCharacter(this.props.params.cid));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      character: nextProps.character,
      percentage: 5,
    });
  }

  displaySkill(name, abbv) {
    return (
      <div className={`skill`}>
        <div className={`skill-bonus`}>+2</div>
        <div className={`skill-name`}>{name} <span className={`pull-right`}>({abbv})</span></div>
      </div>
    )
  }

  displayStatContainer(statName, val) {
    return (
      <div className={`stat-container`}>
        <div>
          <div className={`stat-header`}>
            <h2>{statName}</h2>
            <span>{val}</span>
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
    );
  }

  render() {
    let { character } = this.state;
    console.log(character);

    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>
            {`Character View`}
            <span className={`pull-right`}>

              <Link
                className={`btn btn-info`}
                to={`player/${character.pid}/character/${character.id}/edit`}>Edit Character</Link>
            </span>
          </h3>
        </hgroup>

        <div className="Layout DnD5echaracterView scroll3">
          <div className={`section`}>
            <div className={`health-box`}>

              <ProgressMaker
                strokeWidth="18"
                radius="120"
                color="rgba(45, 45, 45, 1.00)"
                bgcolor={changeColor(this.state.percentage)}
                percentage={this.state.percentage}/>

              <div style={{ backgroundImage: 'url(' + character.AvatarUri + ')' }}
                className="characterAvatar" >
              </div>

              <p>Hit Points: <span>100/100</span></p>
            </div>
            <div className={`experience-box`}>
              <ul>
                <li><strong>Name:</strong> <span> {character.characterName || `--`} </span></li>
                <li><strong>Class & Level:</strong> <span> {character.characterProfession || `--`} </span></li>
                <li><strong>Race:</strong> <span> {character.characterRace || `--`} </span></li>
                <li><strong>Background:</strong> <span> {character.background_snippet || `--`} </span></li>
                <li><strong>Alignment:</strong> <span> {character.alignment || `--`} </span></li>
              </ul>
              <div className={`exp-bar`}>
                <div className={`exp`}></div>
              </div>
            </div>
          </div>
          <div className={`section`}>
            <div className={`stat-box`}>

              <div className={`stat-box-row`}>
                {this.displayStatContainer(`Strength`, character.stats.strength || `--`)}
                {this.displayStatContainer(`Dexterity`, character.stats.dexterity || `--`)}
                {this.displayStatContainer(`Constitution`, character.stats.constitution || `--`)}
              </div>

              <div className={`stat-box-row`}>
                {this.displayStatContainer(`Intelligence`, character.stats.intelligence || `--`)}
                {this.displayStatContainer(`Wisdom`, character.stats.wisdom || `--`)}
                {this.displayStatContainer(`Charisma`, character.stats.charisma || `--`)}
              </div>

              <div className={`content-box`}>
                <hgroup className='ModuleHeader'>
                  <h3>Features & Traits</h3>
                </hgroup>
                <p>Elves have a strong connection to the natural world, especially woodlands. They can live to be more than 700 years old. Known for being artists of both song and magic, elves have an affinity for spellcasting and lore. They stand about 5-1/2 feet tall, appearing graceful and frail. Elves receive a +2 to Dexterity and a –2 to Constitution. They are immune to sleep effects and receive a bonus against enchantment spells. Elves have low-light vision and a racial bonus on Listen, Search, and Spot checks.</p>
              </div>

              <div className={`content-box`} style={{flexDirection: 'row', marginTop: 30, backgroundColor: 'transparent'}}>
                <div style={{
                  flex: 1,
                  display: 'flex',
                  minHeight: 100,
                  backgroundColor: 'rgba(45, 45, 45, 1.00)'}}></div>

                <div style={{
                  flex: 1,
                  display: 'flex',
                  minHeight: 100,
                  backgroundColor: 'rgba(45, 45, 45, 1.00)', marginLeft: 30}}></div>
              </div>
            </div>

            <div className={`info-box`}>
              <div className={`physical-info`}>
                <ul>
                  <li>
                    <strong>Armor Class</strong>
                    <span> {character.armor_class || 20} </span>
                  </li>
                  <li>
                    <strong>Initiative</strong>
                    <span> {character.initiative || `+4`}  </span>
                  </li>
                  <li>
                    <strong>Max Speed</strong>
                    <span> {character.speed || `40`} </span>
                  </li>
                </ul>
              </div>
              <div className={`skills`}>
                <hgroup className='ModuleHeader'>
                  <h3>Skills</h3>
                  <IoNavicon
                    size={28}
                    className={`pull-right HamburgNav`}
                    color={`rgba(255,255,255,1)`}/>
                </hgroup>
                <div className={`skill-list scroll3`}>
                  {this.displaySkill(`Acrobatics`, `DEX`)}
                  {this.displaySkill(`Animals`, `WIS`)}
                  {this.displaySkill(`Arcana`, `INT`)}
                  {this.displaySkill(`Athletics`, `STR`)}
                  {this.displaySkill(`Deception`, `CHA`)}
                  {this.displaySkill(`History`, `INT`)}
                  {this.displaySkill(`Insight`, `WIS`)}
                  {this.displaySkill(`Intimidation`, `CHA`)}
                  {this.displaySkill(`Investigation`, `INT`)}
                  {this.displaySkill(`Medicine`, `WIS`)}
                  {this.displaySkill(`Nature`, `INT`)}
                  {this.displaySkill(`Perception`, `WIS`)}
                  {this.displaySkill(`Performance`, `CHA`)}
                  {this.displaySkill(`Persuasion`, `CHA`)}
                  {this.displaySkill(`Religion`, `INT`)}
                  {this.displaySkill(`Sleight of Hand`, `DEX`)}
                  {this.displaySkill(`Stealth`, `DEX`)}
                  {this.displaySkill(`Survival`, `WIS`)}
                </div>
              </div>
            </div>
          </div>
          {/* <p>{`I am ${character.characterName}`}</p> */}
          {/* <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.Character.selected_character,
  }
};

export default connect(mapStateToProps)(CharacterView);
