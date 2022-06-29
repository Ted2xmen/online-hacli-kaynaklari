import HeaderHero from '../components/HeaderHero'
import TheTable from '../components/TheTable'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Online Haçlı Kaynakları Projesi</title>
        <meta
          name="description"
          content="Haçlı çalışmaları alanında araştırmacılar tarafından kullanılan çeşitli dillerdeki birincil kaynaklara hızlı ve kolay bir şekilde ulaşmayı amaç edinmiş bağımsız bir projedir. Proje kapsamında kaynakların yazarlarına, isimlerine, türlerine, kronolojik ve coğrafî sınırlarına, dillerine, edisyonlarına ve modern dillerdeki çevirilerine yer verilecektir. "
        />
      </Helmet>
      <HeaderHero />
      <TheTable />
      <Footer />
    </div>
  )
}

export default HomePage
