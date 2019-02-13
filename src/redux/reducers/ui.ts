import { SnackbarType } from '../../types/Dialogs';
import { UiActionType } from '../actions/actionTypes';
import { UiAction } from '../actions/ui';

interface IUiState {
  showLoadingProgressBar: boolean;
  loadingProgress: number;
  paneHidden: boolean;
  showSnackbar: boolean;
  snackbarContent: string;
  snackbarType: SnackbarType;
  showLoginDialog: boolean;
  inLoginProgress: boolean;
  showNetworkErrorDialog: boolean;
}

export type UiState = IUiState;

const initialState: UiState = {
  showLoadingProgressBar: false,
  loadingProgress: 0,
  paneHidden: false,
  showSnackbar: false,
  snackbarContent: '',
  snackbarType: SnackbarType.NOTIFICATION,
  showLoginDialog: false,
  inLoginProgress: false,
  showNetworkErrorDialog: false,
};

export default function ui(state: UiState = initialState, action: UiAction): UiState {
  switch (action.type) {
    case UiActionType.PROGRESS_BAR_VISIBILITY:
      return {
        ...state,
        showLoadingProgressBar: action.showLoadingProgressBar,
      };
    case UiActionType.PROGRESS_BAR_PROGRESS:
      return {
        ...state,
        loadingProgress: action.loadingProgress,
      };
    case UiActionType.SNACKBAR_VISIBILITY:
      return {
        ...state,
        showSnackbar: action.showSnackbar,
      };
    case UiActionType.SNACKBAR_CONTENT:
      return {
        ...state,
        snackbarType: action.snackbarType,
        snackbarContent: action.snackbarContent,
      };
    case UiActionType.LOGIN_DIALOG_VISIBILITY:
      return {
        ...state,
        showLoginDialog: action.showLoginDialog,
      };
    case UiActionType.LOGIN_DIALOG_PROGRESS:
      return {
        ...state,
        inLoginProgress: action.inLoginProgress,
      };
    case UiActionType.NETWORK_ERROR_DIALOG_VISIBILITY:
      return {
        ...state,
        showNetworkErrorDialog: action.showNetworkErrorDialog,
      };
    case UiActionType.PANE_VISIBILITY:
      return {
        ...state,
        paneHidden: action.paneHidden,
      };
    default:
      return state;
  }
}