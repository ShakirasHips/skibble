/* eslint-disable react/destructuring-assignment */
import { Button, Menu, MenuItem } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import React from 'react';
import { desktopCapturer } from 'electron';

export async function getVideoSources(): Promise<
Array<Electron.DesktopCapturerSource>
> {
  const sources = await desktopCapturer.getSources({
    types: ['window', 'screen'],
  });
  return sources;
}

export class VideoSelect extends React.Component<
{},
{
  sources: Electron.DesktopCapturerSource[];
  anchorEl: null | HTMLElement;
}
> {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      sources: [],
      anchorEl: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({ anchorEl: event.currentTarget });
    getVideoSources()
      .then((result) => {
		// eslint-disable-next-line react/no-unused-state
        this.setState({ sources: this.state.sources.concat(result)});
        return result;
      })
      .catch((e) => {
        throw e;
	  });
  }

  handleClose() {
    this.setState({sources: [], anchorEl: null });
  }

  render() {
	let sourceMenuDropDown
	if (this.state.sources.length !== 0) {
		sourceMenuDropDown = <Menu
								id="simple-menu"
								anchorEl={this.state.anchorEl}
								keepMounted
								open={Boolean(this.state.anchorEl)}
								onClose={this.handleClose}
							>
								{this.state.sources.map(element => <MenuItem onClick={this.handleClose}>{element.id}</MenuItem>)}
							</Menu>
	}
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          startIcon={<Icons.VideoLabelRounded />}
          onClick={this.handleClick}
        >
          Display Sources
        </Button>
		{sourceMenuDropDown}
      </div>
    );
  }
}
