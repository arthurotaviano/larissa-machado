export function AboutContactButton({ address }: { address: string }) {
  return (
    <a className='inline-block whitespace-nowrap rounded-lg py-3 px-8 bg-neutral-950 text-white text-center font-bold' href={`mailto:${address}`}>
      {address}
    </a>
  )
}
