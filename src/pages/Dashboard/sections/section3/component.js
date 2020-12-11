import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Fade } from "react-awesome-reveal";

import daftarBg from "../../../../assets/svgs/daftar.svg";
import portofolioBg from "../../../../assets/svgs/tingkatkan_portofolio.svg";
import tempatBg from "../../../../assets/svgs/cari_tempat.svg";
import tampilBg from "../../../../assets/svgs/ngamen_dapat_uang.svg";
import alurBg from "../../../../assets/svgs/alur.svg";

const component = ({ classes }) => {
  return (
    <div id="carakerja">
      <Grid className={classes.root} container justify="center">
        <Grid item xs={12} md={8}>
          <Fade duration="1500" direction="up" triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Bagaimana Music Hub bekerja?
            </h1>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="left" triggerOnce>
                  <Grid container justify="flex-end">
                    <Grid item xs={12} md={9} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={daftarBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                01.
              </h1>
            </Grid>
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="right" triggerOnce>
                <div className={classes.spacingLeft}>
                  <h2 className={classes.header2}>Daftar</h2>
                  <p className={classes.descText}>
                    Lakukan pendaftaran di aplikasi Music Hub, lalu verifikasi
                    akun kamu supaya bisa mulai mencari tempat tampil.
                  </p>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="left" triggerOnce>
                <div
                  className={classes.spacingRight}
                  style={{ textAlign: "right" }}
                >
                  <h2 className={classes.header2}>Tingkatkan Portofolio</h2>
                  <p className={classes.descText}>
                    Unggah beberapa portofolio bermain musik kamu supaya
                    pelanggan kami dapat melihat betapa hebatnya kamu!
                  </p>
                </div>
              </Fade>
            </Grid>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                02.
              </h1>
            </Grid>
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="right" triggerOnce>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={11} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={portofolioBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="left" triggerOnce>
                  <Grid container justify="flex-end">
                    <Grid item xs={12} md={9} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={tempatBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                03.
              </h1>
            </Grid>
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="right" triggerOnce>
                <div className={classes.spacingLeft}>
                  <h2 className={classes.header2}>Cari Tempat atau Acara</h2>
                  <p className={classes.descText}>
                    Pilih tempat atau acara yang tersedia di platform kami.
                    Jangan lupa untuk menyesuaikan dengan skill dan kemampuan
                    kamu.
                  </p>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="left" triggerOnce>
                <div
                  className={classes.spacingRight}
                  style={{ textAlign: "right" }}
                >
                  <h2 className={classes.header2}>Tampil & Dapatkan Uang</h2>
                  <p className={classes.descText}>
                    Mulai tampil di tempat yang sudah kamu pilih, tunjukkan
                    penampilan terbaikmu dan dapatkan imbalannya!
                  </p>
                </div>
              </Fade>
            </Grid>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                04.
              </h1>
            </Grid>
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="right" triggerOnce>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={10} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={tampilBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
