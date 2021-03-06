import './RowPics.css'

// components
import StoryCard from '../StoryCard/StoryCard'

const RowPics = (props) => {
  return (
    <section className='row-pics'>
      <div className='split'>
        <StoryCard
          Date={props.Date1}
          Title={props.Title1}
          Author={props.Author1}
          RowImg={props.RowImg1}
        />
        <StoryCard
          Date={props.Date2}
          Title={props.Title2}
          Author={props.Author2}
          RowImg={props.RowImg2}
        />
      </div>
      <div className='split'>
        <StoryCard
          Date={props.Date3}
          Title={props.Title3}
          Author={props.Author3}
          RowImg={props.RowImg3}
        />
        <StoryCard
          Date={props.Date4}
          Title={props.Title4}
          Author={props.Author4}
          RowImg={props.RowImg4}
        />
      </div>
    </section>
  )
}

export default RowPics
