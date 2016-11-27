import React, { Component } from 'react';
import { connect}  from 'react-redux';

class CharactersView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let { characters, router } = this.props;
    return (
      <div className="CharactersView releaseAppmargin">
        <hgroup>
          <h3>Characters View</h3>
        </hgroup>
        <div className="Layout scroll3">
          <div className={`ListViewMain CharactersMain`}>
          { characters.map((c,i) =>
            <div key={i}
              onClick={() => { router.push(`/player/${c.pid}/character/${c.id}`); }}
              className="ListViewBlock CharacterBlock">{c.characterName}</div>)
          }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.Characters.characters,
  }
}
export default connect(mapStateToProps)(CharactersView)
