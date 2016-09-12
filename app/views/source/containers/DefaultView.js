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

        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna.</p>

        <p> Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna. Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna. Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna. Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus commodo, tincidunt libero sit amet, porta augue. Curabitur sit amet tellus pellentesque, condimentum risus ut, sagittis urna. Nulla interdum mattis hendrerit. Duis vulputate arcu sit amet sodales varius. Aenean dapibus, ante quis rutrum viverra, justo erat fermentum ipsum, eu pulvinar eros eros suscipit lorem. In non gravida diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum condimentum erat, a lobortis nunc dictum a. Donec volutpat semper nisl, nec fringilla ex consequat ut. Aliquam erat volutpat. Quisque vel massa commodo, rhoncus nisl id, tristique neque. Integer sit amet metus quis ex euismod accumsan in non metus. Curabitur pharetra malesuada turpis eu semper. Quisque arcu augue, sagittis ac ornare vel, bibendum vel justo.</p>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(DefaultView)
