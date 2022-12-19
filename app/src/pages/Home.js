import React from 'react';
import "./Home.css";
import { Button, Input, Pagination } from 'semantic-ui-react'
import ArticleCard from '../components/ArticleCard'

export default function Home() {
  return (
    <div className='content_home'>
      <div className='filter_bar'>
        <div className='filter_btn'>
          <Button>Plus resent</Button>
          <Button>Filtrer</Button>
        </div>
        <div className='filter_search'>
          <Input icon="search" className='search' />
        </div>
      </div>
      <div className='article'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
    </div>
  )
}
