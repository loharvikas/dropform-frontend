import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const SwitchRoot = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background: #b3c3d3;
  border-radius: 48px;
  margin: 10px;
  cursor: pointer;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #007fff;
  }
`;

const SwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const SwitchThumb = styled('span')`
  display: block;
  width: 22px;
  height: 22px;
  top:1px;
  left:1px;
  bottom: 1px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 25px;
    background-color: #fff;
  }
`;

function Switch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchThumb className={clsx(stateClasses)} />
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

export default function UseSwitche({ checked, handleChange}) {
  return (
    <div>
      <Switch 
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
