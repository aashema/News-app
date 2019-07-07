import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { List, Avatar,Menu} from 'antd';
import { Input } from 'antd';
import axios from 'axios';
const Search = Input.Search;

class News extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
}

componentDidMount(){
  this.getNews();
}

getNews=()=>{
var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=ffc1fbd7698249d2ae2ea1945ab44b45';

  axios.get(url)
  .then((res)=>{
     console.log("getnews",res.data.articles)
   this.setState({
       articles : res.data.articles
   })
  })

}


searchNews(search){
  var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=in&' +
  'apiKey=ffc1fbd7698249d2ae2ea1945ab44b45';
  axios.get(url+"&q="+search)
  .then((res)=>{
     console.log("helooo",res.data.articles)
   this.setState({
       articles : res.data.articles, Serach:null
   })
  })
}

render(){
   return(
   
    <div> 
    <h1 className="head">News Express</h1>
    <h2 className="head">"Get some closer look on this world"</h2>
    <h3>Categories</h3>
      <Menu id="navbar" style={{  width: 150 }}mode="inline">
            <Menu.Item onClick={()=>this.searchNews("Sports")}>Sports</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("tech")}>Technology</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Politics")}>Politics</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Country")}>Country</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Movies")}>Movies</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Business")}>Business</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Climate")}>Climate</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Politics")}>Politics</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Country")}>Country</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Movies")}>Movies</Menu.Item>
            <Menu.Item onClick={()=>this.searchNews("Business")}>Business</Menu.Item>
     </Menu>
  
            <div>
                <div class="content">
                    <Search placeholder="Enter category" onSearch={value => this.searchNews(value)} enterButton />
                   
                    <List
                         itemLayout="vertical"
                        size="large"
                        pagination={{
                         onChange: page => {
                            console.log("page",page);
                            },
                         pageSize: 3,
                        }}
                    dataSource={this.state.articles} 
                    renderItem={item => (  
                      <List.Item id="list"
                      key={item.title}
                      extra={<img width={272} alt="logo" src={item.urlToImage}/> }>
                     {console.log("News app")}
                     <List.Item.Meta 
                    avatar={<Link to={`/Detail/${this.state.articles._id}`}><Avatar src={item.avatar} /></Link>}
            title={<a href={item.url}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>

    )}
    />
</div>
</div>
</div>

 
   )
}
}
export default News;