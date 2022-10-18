import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import Headlines from './Example'
import Spinner from './Spinner'

export class News extends Component {

  articles = Headlines.articles;
  pagesize = 12;

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=146fca820581499396d7971e21861de0&pageSize=${this.pagesize}&page=${this.state.pageNo - 1}`
    this.setState({ Loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.article);
    this.setState({ Loading: false, pageNo: this.state.pageNo - 1, article: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=146fca820581499396d7971e21861de0&pageSize=${this.pagesize}&page=${this.state.pageNo + 1}`
    this.setState({ Loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.article);
    this.setState({ pageNo: this.state.pageNo + 1, article: parsedData.articles, totalResults: parsedData.totalResults, Loading: false })
  }

  constructor() {
    super();
    this.state = {
      article: this.articles,
      pageNo: 1,
      totalResults: " ",
      Loading: false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=146fca820581499396d7971e21861de0&pageSize=${this.pagesize}&page=${this.state.pageNo}`
    this.setState({ Loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.article);
    this.setState({ Loading: false, article: parsedData.articles, totalResults: parsedData.totalResults })
  }
  render() {
    //console.log(Headlines.articles[0].title);
    return (
      <>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', marginBottom: '1rem' }}>
            <h1>Khabar of the day</h1>
          </div>
          {this.state.Loading && <Spinner />}
          <div className='container newsElement text-center'>
            {!this.state.Loading && this.state.article.map((article) => {
              return <div>
                <NewsItem key={article.source.id} ImageUrl={article.urlToImage} title={article.title} description={article.description} url={article.url} />
              </div>
            })}
          </div>

        </div>
        <div className='container d-flex justify-content-between my-5'>
          <button disabled={this.state.pageNo === 1 ? true : false} onClick={this.handlePrev} type="button" class="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.pageNo === Math.ceil(this.state.totalResults / this.pagesize) ? true : false} onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News
