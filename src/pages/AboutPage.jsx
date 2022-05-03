import AppContainer from '../components/AppContainer'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <AppContainer />
      <div className="mx-6 space-y-6 py-6 text-center text-lg lg:mx-24">
        <p>
          Haçlı çalışmaları alanında araştırmacılar tarafından kullanılan
          çeşitli dillerdeki birincil kaynaklara hızlı ve kolay bir şekilde
          ulaşmayı amaç edinmiş bağımsız bir projedir.
        </p>

        <p>
          Proje kapsamında kaynakların yazarlarına, isimlerine, türlerine,
          kronolojik ve coğrafî sınırlarına, dillerine, edisyonlarına ve modern
          dillerdeki çevirilerine yer verilecektir. Oluşturulan tablodan
          kaynakların edisyonlarına ve çevirilerine bir tıkla ulaşılacaktır.
          Online erişime açık edisyonların ve çevirilerin yanı sıra, erişime
          kapalı olan edisyonların ve çevirilerin künyeleri de tabloda yer
          almaktadır.
        </p>

        <p>
          Projenin dönemsel sınırlarını 1095-1444 yılları arası oluşturmaktadır.
          Haçlı çalışmalarında kullanılan yazılı kaynaklar, çeşitli dillerde ve
          çok çeşitli alanlardan gelmektedir. Bu nedenle proje, her alandan her
          alandan her uzmanlık seviyesinden katkıda bulunmak isteyen kişilere
          açıktır.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
