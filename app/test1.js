var React=require('react');
var ReactDOM=require('react-dom');

//childComponent
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});


//parentComponent
var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Mayi'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    );
  }
});

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
)