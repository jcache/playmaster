import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';

class DefaultView extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="DefaultView">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna. Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.
</p>
<p>
Nulla condimentum auctor mi id cursus. Aliquam erat volutpat. Cras accumsan imperdiet diam in placerat. Mauris venenatis sapien quis purus lobortis porttitor. Pellentesque at egestas augue. Suspendisse potenti. Nulla pulvinar, orci sit amet finibus egestas, leo ipsum ornare orci, eu suscipit arcu nunc et nisi. Curabitur aliquam neque eu est facilisis lobortis. Donec cursus lacus in ligula scelerisque accumsan. Ut at nunc aliquet nibh lobortis vestibulum vitae consectetur nulla. Nam tincidunt leo dolor, quis egestas est egestas et.
</p>
<p>
Sed et tellus ornare, volutpat quam vitae, tincidunt diam. Integer non turpis condimentum, commodo lectus sed, vulputate lacus. Proin vehicula dui at quam maximus tincidunt. Aliquam imperdiet posuere mauris, non vulputate massa iaculis at. Pellentesque fringilla efficitur leo sagittis condimentum. Nullam quis mi augue. Vestibulum ullamcorper eros a dolor hendrerit elementum. Nullam eu mattis neque. Fusce consectetur faucibus nisl, eget sodales velit bibendum non. Quisque id dapibus leo. Nunc gravida felis at enim mollis dictum. Proin eget augue placerat, feugiat quam a, tempus ante.
</p>
<p>
Donec rutrum tortor eget eros tristique, sed tempus neque pulvinar. Phasellus porttitor at lectus eget laoreet. Nam eu ultrices sem. Fusce in malesuada dolor, quis porttitor nunc. Aliquam laoreet scelerisque purus, ac tincidunt mi placerat id. Sed fringilla dui vitae diam tempus blandit. Quisque semper eleifend tincidunt.
</p>
<p>
Vivamus quis augue dignissim, elementum dui id, mollis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus purus, suscipit finibus pretium eget, dapibus ac leo. Sed dolor orci, placerat sit amet orci a, convallis ullamcorper ante. Quisque efficitur lorem eu eleifend molestie. Fusce ac lorem pharetra, viverra sem id, posuere nisi. Donec imperdiet dolor erat, eget dignissim augue ultrices a. Donec porta imperdiet diam, nec semper nisl commodo ut. Sed mi ante, venenatis at enim sed, tristique accumsan dui. Vestibulum nulla odio, venenatis sed libero ac, ultrices maximus turpis. Suspendisse et justo magna. Aliquam pharetra sollicitudin urna. Etiam dictum libero lectus, id egestas dolor consectetur nec. In at tristique risus, ut feugiat erat.
</p>
<p>
Nam et neque vel ligula aliquet consequat. Morbi egestas pulvinar fermentum. Maecenas pellentesque aliquam mi, id finibus elit feugiat ut. Integer tincidunt tincidunt elementum. Quisque ut dui diam. Praesent varius mauris eu tristique tempor. Nulla facilisi.
</p>
<p>
Praesent quis euismod justo, et molestie nisl. Suspendisse in ultrices nisl. Sed venenatis laoreet tellus, a lacinia velit pharetra nec. Duis semper aliquam sem, vitae tristique lorem pretium et. Morbi consectetur consequat nisi tempus porta. Pellentesque neque leo, finibus quis congue eu, finibus sed metus. Maecenas id lacus ipsum. Integer vitae nunc lectus. Ut laoreet faucibus odio, id maximus ligula elementum vel. In sagittis mauris vitae lorem suscipit, vel elementum dui posuere. Maecenas quam mauris, pulvinar sed tempor tincidunt, commodo in tellus. Proin non odio ornare, blandit urna in, sagittis enim. Donec eu aliquam ipsum, quis suscipit ligula.
</p>
<p>
Ut lacus nulla, tristique id facilisis at, fringilla in nisl. Cras rhoncus pulvinar ipsum id volutpat. Donec nec rutrum ante. Sed fringilla est eu libero faucibus tincidunt. Cras leo risus, interdum eu ligula sit amet, viverra mattis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at purus nec lectus vestibulum auctor non in neque. Vestibulum vitae dui ut odio blandit viverra. Donec tincidunt est quis dapibus finibus. Donec ipsum diam, convallis id nulla ut, egestas pretium tellus. Nam quis ante ut orci dictum sollicitudin. Vestibulum ultricies at arcu vel porttitor. Duis eget leo lacus. Mauris sit amet hendrerit felis. Duis nec mauris rutrum, tempor est eu, eleifend metus.
</p>
<p>
Aenean tempor mi et nisl elementum, eu mollis eros interdum. Vivamus mattis varius condimentum. Vestibulum vestibulum velit dolor, vitae iaculis ligula tristique sed. Vestibulum risus neque, efficitur id erat vitae, tempor egestas ligula. Phasellus orci velit, tincidunt convallis erat nec, euismod molestie velit. Sed rhoncus rhoncus commodo. In at justo venenatis, scelerisque purus id, congue dui. Duis consequat quam a pretium tincidunt. Sed auctor, ipsum in posuere laoreet, risus velit blandit mauris, scelerisque mattis libero purus non turpis. Cras eros libero, iaculis non ante a, interdum congue dui. Aliquam dapibus ac leo at eleifend. Curabitur at finibus sem. Nulla mauris lacus, blandit nec ornare vitae, condimentum et nunc. Maecenas pharetra tincidunt lobortis. Praesent pharetra urna mauris, id egestas nisl pulvinar mollis.
</p>
<p>
Morbi sem lectus, commodo sed scelerisque id, maximus et turpis. Donec tortor augue, pretium vel augue sed, lobortis fermentum ante. Nulla dictum libero vel est lacinia, sagittis pretium felis laoreet. Integer rutrum nulla et feugiat vehicula. Ut at vestibulum sapien. Maecenas auctor dapibus rutrum. Ut maximus fermentum ex eu tristique. Nulla facilisi. Donec finibus tempor nunc, et tincidunt neque pulvinar non. Phasellus at nisi eu magna scelerisque ullamcorper. Suspendisse in mauris ex. Pellentesque quis consequat leo, nec consectetur urna. Etiam vitae cursus mi.
</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(DefaultView)
