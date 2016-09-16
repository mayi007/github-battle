var USER_DATA = {
  name: 'mayi',
  username: 'mayi007',
  image: 'https://avatars1.githubusercontent.com/u/17736361?v=3&u=687ca36f10e5e47731c9b53f9bc7b3b92f14989f&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>;
  }
});

var Link=React.createClass({
  changeURL:function(){
    window.location.replace(this.props.href);
  },
  render:function(){
      return (
          <a style={{color:'blue',cursor:'pointer'}} onClick={this.changeURL}>
            {this.props.children}
          </a>
      );
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>;
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));






