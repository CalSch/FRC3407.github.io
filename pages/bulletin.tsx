import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import { Bullet } from '../typings'

type Data = { bullets: string[] }

export const getServerSideProps: GetServerSideProps<{ bullets: Bullet[] }> = async () => {

  const res = await fetch("http://localhost:3000/api/fetchbulletin")
  const data = await res.json()

  return {
    props: {
      bullets: data.bullets as Bullet[],
    },
  }
}

function Page({ bullets }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {bullets.map((bullet, index) => {
        return (
          <div key={`div_${index}`}>
            <h1>Bullet {index + 1}: {bullet.name}</h1>
            <h2>Message: {bullet.message}</h2>
            <h3>Posted on {new Date(bullet.date).toLocaleString()}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Page