export default function Home() {
  return (
    <ul role="list" className="">
      <li className="flex items-center justify-between border-b border-b-gray-200 px-3 py-5">
        <div className="flex items-center gap-3">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <p className="font-bold">Michael Foster</p>
            <p className="text-sm text-gray-400">michael.foster@example.com</p>
          </div>
        </div>
        <div className="hidden flex-col gap-3 sm:flex">
          <p className="">Co-Founder / CTO</p>
          <p className="text-sm text-gray-400">
            Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li className="flex items-center justify-between border-b border-b-gray-200 px-3 py-5">
        <div className="flex items-center gap-3">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <p className="font-bold">Dries Vincent</p>
            <p className="text-sm text-gray-400">dries.vincent@example.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="">Business Relations</p>
          <div className="mt-1 flex items-center">
            <div className="rounded-full bg-emerald-500/20 p-1">
              <div className="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
