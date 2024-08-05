'use client'
import SearchIcon from '@/assets/Icons/SearchIcon'
import { Input } from '@/components/ui/input'
import React from 'react'
import MuteBackground from './MuteBackground'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronLeft, MoveLeft } from 'lucide-react'

type SearchProps = {
  back?: boolean
  placeholder?: string
}

const Search = ({ back = false, placeholder }: SearchProps) => {
  const router = useRouter();

  const handleSearch = () => {
    router.push('/search')
  }

  return (
    <MuteBackground>
      <div className="relative w-full h-14">

        <Input placeholder={placeholder || 'Search anything lorem lorem'}
          className='ring-[1px] 
          ring-muted-dark rounded-lg
          bg-white sm:placeholder:font-normal placeholder:font-normal 
          placeholder:text-zinc-400 sm:placeholder:text-sm placeholder:text-base h-full
          px-5 focus:outline-none focus-visible:ring-0
          '
          onClick={handleSearch}
        />
        {back && <div className='w-6 h-6 absolute top-3.5 left-2 -translate-x-1/2 text-primary font-bold'>
          <ArrowLeft />
        </div>}
        <div className='w-6 h-6 absolute top-3.5 right-3 -translate-x-1/2 text-primary font-bold'>
          <SearchIcon />
        </div>
      </div>
    </MuteBackground>

  )
}

export default Search