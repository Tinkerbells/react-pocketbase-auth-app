import React, { FC } from 'react'
import { IOAuth2Provider } from '../../types/IOAuth2Provider'
import ProviderIcon from './ProviderIcon'

interface OAuthProvidersProps {
  providers: IOAuth2Provider[]
}

const OAuthProviders: FC<OAuthProvidersProps> = ({ providers }) => {
  const OAuthHandler = (provider: IOAuth2Provider) => {
    localStorage.setItem('provider', JSON.stringify(provider))
  }

  return (
    <div className='flex gap-7 mt-7'>
      {providers?.length > 0 &&
        providers.map((provider) => (
          <a
            key={provider.name}
            href={provider.authUrl}
            className='w-7 h-7'
            onClick={() => OAuthHandler(provider)}
          >
            <ProviderIcon name={provider.name} />
          </a>
        ))}
    </div>
  )
}

export default OAuthProviders
