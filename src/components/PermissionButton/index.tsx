import type { ButtonProps, PopconfirmProps, TooltipProps } from 'antd';
import { Button, Popconfirm, Tooltip } from 'antd';

import { useCallback } from 'react';


export interface PermissionButtonProps extends ButtonProps {
  tooltip?: TooltipProps;
  popConfirm?: PopconfirmProps;
  isPermission?: boolean;
  noButton?: boolean;
}

/**
 * 权限按钮
 * @param props
 * @example 引入改组件，使用组件内部 usePermission 获取相应权限
 */
const PermissionButton = (props: PermissionButtonProps) => {
  const { tooltip, popConfirm, isPermission, ...buttonProps } = props;
  const _isPermission =
    'isPermission' in props && props.isPermission
      ? 'disabled' in buttonProps
        ? buttonProps.disabled
        : false
      : true;



  const isButton = 'noButton' in props && props.noButton;

  const defaultButton = isButton ? (
    props.children
  ) : (
    <Button {...buttonProps} disabled={_isPermission} />
  );

  const isTooltip = tooltip ? <Tooltip {...tooltip}>{defaultButton}</Tooltip> : null;

  const noPermission = (
    <Tooltip
      title="没有权限"
    >
      {<Button {...buttonProps} disabled={_isPermission} />}
    </Tooltip>
  );

  const init = useCallback(() => {
    // 如果有权限
    if (isPermission) {
      if (popConfirm) {
        popConfirm.children = tooltip ? isTooltip : defaultButton;
        return <Popconfirm disabled={!isPermission || props.disabled} {...popConfirm} />;
      } else if (tooltip && !popConfirm) {
        return isTooltip;
      } else {
        return defaultButton;
      }
    }
    return noPermission;
  }, [props, isPermission]);

  return <>{init()}</>;
};



export default PermissionButton;
