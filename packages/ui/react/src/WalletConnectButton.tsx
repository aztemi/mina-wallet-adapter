import React from "react";
import type { MouseEvent } from "react";
import { shortenAddress } from "mina-wallet-adapter-core";
import { useWallet } from "./useWallet";
import { WalletButton } from "./WalletButton";

type WalletConnectButtonProps = {
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function WalletConnectButton(props: WalletConnectButtonProps) {
  const { connected, connecting, connect, wallet, account } = useWallet();

  function handleClick() {
    connect().catch(() => {});
  }

  function getText() {
    let content = "Connect Wallet";
    if (wallet) content = "Connect";
    if (connecting) content = "Connecting ...";
    if (connected) content = account ? shortenAddress(account.address) : "Connected";

    return content;
  }

  return (
    <WalletButton
      className="wallet-adapter-button-trigger"
      disabled={props.disabled || connecting}
      startIcon={wallet ? <img src={wallet?.icon} alt={`${wallet?.name} icon`} /> : undefined}
      onClick={props.onClick || handleClick}
    >
      {getText()}
    </WalletButton>
  );
}