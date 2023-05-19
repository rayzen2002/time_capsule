export default function Right() {
  return (
    <div className="flex flex-col border-r bg-[url(../assets/stars.svg)] bg-cover">
      <div className="flex h-full items-center justify-center">
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href="" className="underline hover:text-gray-50">
            {' '}
            criar agora!
          </a>
        </p>
      </div>
    </div>
  )
}
